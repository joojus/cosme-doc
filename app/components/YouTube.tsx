//components/mdx/YouTube.tsx
export default function YouTube ({ id } : { id : string }){
  return (
    <div>
      <iframe
        className="aspect-video w-full rounded-md"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        width="100%"
          height="500px"
        allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
