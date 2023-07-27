import Chessboard from "@/components/chessboard/Chessboard";
import style from './app.module.css'
export default function Home() {
  return (
    <main className={style.app}>
      <Chessboard />
    </main>
  )
}
