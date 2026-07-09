from pathlib import Path
import math
import random

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "img" / "common" / "ogp.png"
PORTRAIT = ROOT / "assets" / "portrait.webp"
FONT = Path(r"C:\Windows\Fonts\NotoSansJP-VF.ttf")
FONT_BOLD = Path(r"C:\Windows\Fonts\BIZ-UDGothicB.ttc")

W, H = 1200, 630
BG = "#05080b"
CYAN = "#5bc8ff"
CYAN_LIGHT = "#b7eaff"
TEXT = "#f4f7f8"
MUTED = "#a4b4bc"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_BOLD if bold else FONT), size=size)


canvas = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(canvas, "RGBA")

# Subtle grid and field particles.
for x in range(0, W, 80):
    draw.line((x, 0, x, H), fill=(91, 200, 255, 12), width=1)
for y in range(0, H, 70):
    draw.line((0, y, W, y), fill=(91, 200, 255, 10), width=1)

random.seed(27)
for _ in range(90):
    x = random.randrange(W)
    y = random.randrange(H)
    size = random.choice((1, 1, 2, 2, 3))
    draw.rectangle((x, y, x + size, y + size), fill=(91, 200, 255, random.randrange(25, 95)))

# Portrait remains untouched; only this derived OGP crop is generated.
portrait = Image.open(PORTRAIT).convert("RGB")
portrait = ImageOps.fit(
    portrait,
    (500, H),
    method=Image.Resampling.LANCZOS,
    centering=(0.50, 0.42),
)
portrait_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
portrait_layer.paste(portrait.convert("RGBA"), (700, 0))

fade = Image.new("L", (500, H))
fade_px = fade.load()
for y in range(H):
    for x in range(500):
        left = max(0.0, min(1.0, (x - 20) / 190))
        edge = max(0.0, min(1.0, (500 - x) / 80))
        fade_px[x, y] = int(255 * left * edge)
portrait_layer.putalpha(Image.new("L", (W, H), 0))
alpha = portrait_layer.getchannel("A")
alpha.paste(fade, (700, 0))
portrait_layer.putalpha(alpha)
canvas = Image.alpha_composite(canvas.convert("RGBA"), portrait_layer)
draw = ImageDraw.Draw(canvas, "RGBA")

# Digital core behind the portrait.
cx, cy = 925, 308
for radius, opacity, rotation in ((190, 80, 0.1), (145, 105, 0.42), (102, 125, 0.0)):
    points = []
    for i in range(6):
        angle = rotation + math.pi * 2 * i / 6
        points.append((cx + math.cos(angle) * radius, cy + math.sin(angle) * radius))
    draw.line(points + [points[0]], fill=(91, 200, 255, opacity), width=2)
for angle in (0.25, 1.8, 3.5, 5.2):
    x = cx + math.cos(angle) * 190
    y = cy + math.sin(angle) * 190
    draw.ellipse((x - 5, y - 5, x + 5, y + 5), fill=(124, 255, 197, 185))

# Left-side identity and message.
draw.rectangle((64, 58, 108, 102), outline=CYAN, width=2)
draw.text((77, 64), "橘", font=font(24, bold=True), fill=CYAN_LIGHT)
draw.text((126, 62), "RYUTARO TACHIBANA", font=font(18), fill=TEXT)
draw.text((126, 86), "FIELD SERVICE × AI ENGINEERING", font=font(12), fill=CYAN)

draw.text((64, 188), "現場を読み、", font=font(68, bold=True), fill=TEXT)
draw.text((64, 278), "仕組みを実装する。", font=font(68, bold=True), fill=CYAN)

draw.line((64, 402, 604, 402), fill=(183, 234, 255, 90), width=1)
draw.text((64, 428), "修理・施工の一次情報を、AIとWebで使われ続ける業務へ。", font=font(22), fill=MUTED)
draw.text((64, 548), "PORTFOLIO  /  NAGOYA", font=font(14), fill=CYAN_LIGHT)

OUT.parent.mkdir(parents=True, exist_ok=True)
canvas.convert("RGB").save(OUT, "PNG", optimize=True)
print(f"Generated {OUT} ({OUT.stat().st_size} bytes)")
