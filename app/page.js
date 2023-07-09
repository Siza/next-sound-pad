'use client'
import toto from './assets/trexroar.mp3'
import funny from './assets/pipe-trial-117724.mp3'
import useSound from 'use-sound';

export default function Home() {

  const [playSound] = useSound(
    toto
  );

  const [playFunny] = useSound(funny)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="grid grid-cols-4 gap-4">
        <button className="rounded-none bg-emerald-300 p-4" onClick={playSound}>Son 1</button>
        <button className="rounded-none bg-emerald-300 p-4" onClick={playFunny}>Son 2</button>
        <button className="rounded-none bg-emerald-300 p-4">Son 3</button>
        <button className="rounded-none bg-emerald-300 p-4">Son 4</button>
      </div>
    </main>
  )
}
