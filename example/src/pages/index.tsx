import { Button } from "@fbaldini/pulse-ui";

export default function Home() {
  return (
    <main>
      <Button
        style="primary"
        small
        outlined
        onClick={() => {
          alert("Clicked!");
        }}
      >
        Oddio
      </Button>
    </main>
  );
}
