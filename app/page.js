'use client'
import toto from './assets/audio-aurel-elodie.mp3'
import useSound from 'use-sound';

export default function Home() {

  const [playSound, { stop, pause, isPlaying }] = useSound(
    toto,
    {
      sprite:{
      andre: [0, 31500],
      taz:[32000, 4000],
      liliane:[37000, 24900],
      bestof1:[62000, 5610],
      inconnus:[68000, 9800],
      bronzes:[79000, 15500],
      didier:[94000, 2400],
      nicho:[97000, 32400],
      kamel1:[130000, 18700],
      kamel2:[149000, 26300],
      bestof2:[176000, 5900],
      cyclisme:[182000, 15500],
      psg:[198000, 34900],
      bestof3:[233000, 5200],
      bestof4:[239000, 6700],
      balavoine:[246000, 4800],
      rolland:[251800, 12500]
    },
    interrupt: true
    }

  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="grid grid-cols-3 gap-4">
        <button className="rounded-none bg-emerald-300 p-3" onClick={()=>playSound({id:'andre'})}>André</button>
        <button className="rounded-none bg-emerald-300 p-3" onClick={()=>playSound({id:'taz'})}>Taz</button>
        <button className="rounded-none bg-emerald-300 p-3" onClick={()=>playSound({id:'liliane'})}>Liliane</button>
        <button className="rounded-none bg-emerald-300 p-3" onClick={()=>playSound({id:'bestof1'})}>Son 4</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'inconnus'})}>Inconnus</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'bronzes'})}>Bronzés</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'didier'})}>Didier</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'nicho'})}>Nicho</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'kamel1'})}>Kamel 1</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'kamel2'})}>Kamel 2</button>
        <button className="rounded-none bg-emerald-300 p-3" onClick={()=>playSound({id:'bestof2'})}>Bestof2</button>
        <button className="rounded-none bg-emerald-300 py-3 px-1" onClick={()=>playSound({id:'cyclisme'})}>Cyclisme</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'psg'})}>PSG</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'bestof3'})}>Bestof3</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'bestof4'})}>Bestof4</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'balavoine'})}>Balvoine</button>
        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>playSound({id:'rolland'})}>Rolland</button>

        <button className="rounded-none bg-emerald-300 py-3 px-2" onClick={()=>stop()}>Stop</button>
      </div>
    </main>
  )
}
