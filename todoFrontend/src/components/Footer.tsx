const Footer = () => {
  return (
    <div className='flex w-[100%] m-auto fixed bottom-0 bg-[#A3C6C4] h-[3rem]'>
        <ul className='flex justify-between w-[20%] m-auto'>
            <li className='mt-auto mb-auto'><a href="https://github.com/egabszi" target='_blank' rel="noreferrer"><img className='w-[2rem]' src="./src/assets/github.png" alt="github"/></a></li>
            <li className='mt-auto mb-auto'><a href="https://www.linkedin.com/in/g%C3%A1bor-egerv%C3%B6lgyi/" target='_blank' rel="noreferrer"><img className='w-[2rem]' src="./src/assets/linkedin.png" alt="linkedin"/></a></li>
            <li className='mt-auto mb-auto'><a href="mailto:egabor43@gmail.com"><img className='w-[2rem]' src="./src/assets/email.png" alt="email"/></a></li>
        </ul>
    </div>
  )
}

export default Footer