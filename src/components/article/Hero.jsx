import { logo } from '../../assets';

const Hero = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <h1 className="head_text">
        Summarize <span className="text-lime-400">Articles</span> with <br className="max-md:hidden"/>
        <span className="blue_gradient">Open AI</span>
      </h1>
      <h2 className="desc">
        Summarize the articles that you are reading with this OpenAI article summarizer
      </h2>
    </section>
  )
}

export default Hero