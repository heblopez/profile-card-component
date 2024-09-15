import ProfilePicture from '../assets/image-profile.jpg'

export default function ProfileCard() {
  return (
    <article className="relative bg-white rounded-xl shadow-lg max-w-[350px] mx-auto overflow-hidden z-20">
      <div className="relative min-h-[140px] flex items-center justify-center bg-[url('/src/assets/bg-pattern-card.svg')] bg-cover bg-center">
        <figure className="absolute top-1/2 rounded-[50%] border-[5px] border-white overflow-hidden">
            <img src={ProfilePicture} alt="Profile-Picture" className="w-full h-full object-cover" />
        </figure>
      </div>
      <div className="flex gap-3 justify-center items-center pt-14">
        <h1 className="text-xl font-bold">Victor Crest</h1>
        <p className="text-gray-500">26</p>
      </div>
      <p className="text-base text-gray-500 text-center mt-1">London</p>
      <div className="flex justify-center mt-8 py-6 gap-12 bg-very-light-grayish-blue border-t border-light-grayish-blue-1">
      <div className="text-center">
        <h3 className="font-bold text-gray-800">80K</h3>
        <p className="text-gray-500 text-xs tracking-wider">Followers</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-gray-800">803K</h3>
        <p className="text-gray-500 text-xs tracking-wider">Likes</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-gray-800">1.4K</h3>
        <p className="text-gray-500 text-xs tracking-wider">Photos</p>
      </div>
      </div>
    </article>
  )
}
