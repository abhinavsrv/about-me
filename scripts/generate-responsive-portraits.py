from pathlib import Path

from PIL import Image


SOURCE_DIRECTORY = Path("/home/ubuntu/webdev-static-assets/folio-2027")
OUTPUT_DIRECTORY = Path("/home/ubuntu/webdev-static-assets/folio-2027/responsive")
VARIANTS = {
    "abhinav-suit-garden.webp": "abhinav-suit-garden-640.webp",
    "abhinav-cafe-portrait.jpeg": "abhinav-cafe-portrait-640.webp",
    "abhinav-window-portrait.webp": "abhinav-window-portrait-640.webp",
    "abhinav-window-seated.webp": "abhinav-window-seated-640.webp",
}


def create_variant(source_name: str, output_name: str) -> None:
    source_path = SOURCE_DIRECTORY / source_name
    output_path = OUTPUT_DIRECTORY / output_name
    with Image.open(source_path) as image:
        image = image.convert("RGB")
        width = 640
        height = round(image.height * width / image.width)
        image.resize((width, height), Image.Resampling.LANCZOS).save(
            output_path,
            "WEBP",
            quality=82,
            method=6,
        )


def main() -> None:
    OUTPUT_DIRECTORY.mkdir(parents=True, exist_ok=True)
    for source_name, output_name in VARIANTS.items():
        create_variant(source_name, output_name)


if __name__ == "__main__":
    main()
