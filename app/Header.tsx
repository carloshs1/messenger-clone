import Image from 'next/image'
import Link from 'next/link'
import { META_LOGO } from '../utils/constants'
import LogoutButton from './LogoutButton'
import { unstable_getServerSession } from 'next-auth/next'

const Header: any = async () => {
 const session = await unstable_getServerSession()
 return (
  <header
   className={`sticky top-0 z-50 bg-white flex ${
    (session && 'justify-between') || 'justify-center'
   } items-center p-10 shadow-sm`}
  >
   {session ? (
    <>
     <div className="flex space-x-2">
      <Image
       className="rounded-full mx-2 object-contain"
       height={10}
       width={50}
       src={session.user?.image || META_LOGO}
       alt="User"
      />
      <div>
       <p className="text-blue-400">Logged in as:</p>
       <p className="font-bold text-lg">{session.user?.name}</p>
      </div>
     </div>
     <LogoutButton />
    </>
   ) : (
    <div className="flex flex-col items-center space-y-5">
     <div className="flex space-x-2 items-center">
      <Image src={META_LOGO} alt="Logo" height={10} width={50} />

      <p className="text-blue-400">Welcome to messenger</p>
     </div>
     <Link
      href="/auth/signin"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
     >
      Sign in
     </Link>
    </div>
   )}
  </header>
 )
}

export default Header
