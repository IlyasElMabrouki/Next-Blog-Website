import Image from 'next/image';

export default function ProfilPic() {
  return (
    <section>
      <Image
        src="/images/profil.png"
        width={200}
        height={200}
        alt="Ilyas El Mabrouki"
        priority={true}
      />
    </section>
  );
}
