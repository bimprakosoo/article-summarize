import { logo } from '../../assets';

const Hero = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <h1 className="head_text">
        Summarize <span className="text-red-700">Youtube</span> Video with <br className="max-md:hidden"/>
        <span className="orange_gradient">Open AI</span>
      </h1>
      <h2 className="desc">
        Summarize the youtube video that you are watching with this OpenAI youtube summarizer
      </h2>
    </section>
  )
}

export default Hero