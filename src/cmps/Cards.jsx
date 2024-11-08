import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

export function Cards() {
    return (
        <div className="w-full bg-white py-[10rem] px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white"
                src={Single}
                alt="Single card"
              />
              <h2 className='text-2xl font-bold text-center py-8'>Basic User</h2>
              <p className='text-center text-4xl font-bold'>$199.99</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trial</button>
            </div>
            
            <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-20 mx-auto mt-[-3rem] bg-transparent"
                src={Double}
                alt="Double card"
              />
              <h2 className='text-2xl font-bold text-center py-8'>Standard User</h2>
              <p className='text-center text-4xl font-bold'>$299.99</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
                <p className='py-2 border-b mx-8'>5 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img
                className="w-20 mx-auto mt-[-3rem] bg-white"
                src={Triple}
                alt="Triple card"
              />
              <h2 className='text-2xl font-bold text-center py-8'>Premium User</h2>
              <p className='text-center text-4xl font-bold'>$499.99</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Start Trial</button>
            </div>
          </div>
        </div>
      );
      
}
