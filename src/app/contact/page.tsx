
const page = () => {
  return (
    <div className='flex flex-col gap-8 items-center lg:my-10 my-28 md:mx-40 mx-16'>
      <h1 className="md:text-5xl sm:text-4xl text-3xl text-[#e90074]">CONTACT ME</h1>
      <p className="text-center sm:mx-10 mx-0">
      Get in touch today to discuss your project needs or any inquiries. We are here to provide personalized assistance and expert solutions to bring your digital ideas to life. Reach out now!
      </p>
      <div className="flex sm:flex-row flex-col gap-10 mt-10">
      <div className="flex flex-col gap-5">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <textarea name="message" id="message" rows={3} placeholder="Message"></textarea>
        <button className="bg-[#e90074] w-[150px] py-2 rounded-full">Send Message</button>
      </div>

        <map>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.739029092916!2d67.19077603374697!3d24.868305811695993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb330aed6e64901%3A0x549ade1e16dbb2c6!2sGohar%20Green%20City%20Bagh%20e%20Ibrahim%20Society%20Shah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731093889715!5m2!1sen!2s" width="350" height="350"   loading="eager"></iframe>
        </map>

      </div>
    </div>
  )
}

export default page
