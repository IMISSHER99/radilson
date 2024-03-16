import Header from "./components/header";
import Overlay from "./components/overlay";

export default function Home() {


  return (
    <main className='main w-screen h-screen relative overflow-hidden'>
      <Overlay />
      <Header />
    </main>
  );
}
