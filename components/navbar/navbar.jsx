import Link from 'next/link';


const Navbar = () => {
    return (
      <div className='flex items-center w-full bg-gray-800 h-12'>
        <Link href={'/'} className="text-3xl ml-3 font-tradewinds text-center">The Shadow Realm</Link>
            <div className="flex w-1/3 items-center justify-around font-farsan text-2xl bold">
                <Link href="/">Home</Link>
                <Link href="/cards">All Cards</Link>
                <Link href="random">Random</Link>
                {/* <Link href="user-deck">Deck Builder</Link> */}
            </div>
      </div>
    );
  }
  
  export default Navbar;
  