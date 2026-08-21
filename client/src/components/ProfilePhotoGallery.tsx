const profileGalleryPhotos = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/IFURHuWFcEKoWKWP.jpeg",
    alt: "Abhinav Srivastava in a suit seated in a café interior",
    width: 899,
    height: 1599,
    label: "01 / café study",
    variant: "tall",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/ymTRNnktyTuyghwy.jpeg",
    alt: "Abhinav Srivastava holding two teddy bears in a store aisle",
    width: 1239,
    height: 1227,
    label: "02 / archive frame",
    variant: "square",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/hYtNGszcEmPklUsY.webp",
    alt: "Abhinav Srivastava seated on a garden bench in a blue suit",
    width: 1152,
    height: 2048,
    label: "03 / garden record",
    variant: "tall",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030582146/fOTdFKituzkPKyXa.jpeg",
    alt: "Abhinav Srivastava seated in a lounge in a blue suit",
    width: 3072,
    height: 4096,
    label: "04 / portrait record",
    variant: "wide",
  },
] as const;

export default function ProfilePhotoGallery() {
  return (
    <section className="profile-gallery" aria-labelledby="profile-gallery-title">
      <div className="profile-gallery__heading">
        <p className="eyebrow">Personal archive</p>
        <h2 id="profile-gallery-title">A few frames<br />behind the <em>record.</em></h2>
        <p>Selected personal photographs are held apart from the research evidence: they offer context for the person behind the practice, not support for its technical claims.</p>
      </div>
      <div className="profile-gallery__grid">
        {profileGalleryPhotos.map((photo) => (
          <figure className={`profile-gallery__item profile-gallery__item--${photo.variant}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="eager" decoding="async" />
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
