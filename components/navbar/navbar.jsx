import Link from 'next/link';


const Navbar = () => {
    return (
      <div className="flex justify-between bg-black">
        <div className='flex'>
          <Link href={'/'} className="text-3xl ">The Shadow Realm</Link>
              <div className="flex w-1/3">
                  <Link href="/">Home</Link>
                  <Link href="/cards">All Cards</Link>
                  <Link href="random">Random</Link>
                  {/* <Link href="user-deck">Deck Builder</Link> */}
              </div>
        </div>
              <div className='w-1/2 bg-white'>
              </div>
      </div>
    );
  }
  
  export default Navbar;
  