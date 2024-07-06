import Posts from './Posts'
import img from '../assets/Main.png'

function HomeSec() {
  return (
    <main className="main-color flex flex-col items-center justify-center">
    <div className="w-full h-96 sm:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
    <section className="container mx-auto mt-8">
        <Posts />
    </section>
</main>


  )
}

export default HomeSec