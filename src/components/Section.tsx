interface Props {
  image: string;
  children: React.ReactNode;
}

export default function Section({ image, children }: Props) {
  return (
    <section className="flex gap-4">
      <div>
        <img src={image} alt="image" />
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}