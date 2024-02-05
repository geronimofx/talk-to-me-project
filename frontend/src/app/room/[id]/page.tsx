import Chat from '@/components/Chat';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Room({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[85%] ">
        <div className="md:w-[80%] w-full m-3">
          <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className='h-full w-full'></video>
              <span className='absolute bottom-3'>Geronimo</span>
            </div>
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className='h-full w-full'></video>
              <span className='absolute bottom-3'>Geronimo</span>
            </div>
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className='h-full w-full'></video>
              <span className='absolute bottom-3'>Geronimo</span>
            </div>
            <div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
              <video className='h-full w-full'></video>
              <span className='absolute bottom-3'>Geronimo</span>
            </div>
          </div>
        </div>
        <Chat />
      </div>
      <Footer />
    </div>
  );
}