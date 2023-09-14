import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { Roles } from './enums';
// export { default } from 'next-auth/middleware';


export default withAuth(
  function middleware (req) {
    
    // console.log(req.nextauth.token);
    // console.log(req.nextauth.token.roles.includes('Basic'));
    
    //todo: activate this later
    if (req.nextUrl.pathname.startsWith('/dashboardx') && 
      ((req.nextauth.token as any)?.roles?.includes(Roles.Basic) === false)) 
    {
      return NextResponse.rewrite(
        new URL('/login?message=You are not Authorized!', req.url)
      );
    }

    // if (req.nextUrl.pathname.startsWith('/dashboard') && req.nextauth.token?.role !== 'admin') {
    //   return NextResponse.rewrite( new URL('/auth/login?message=You are not Authorized!',req.url) );
    // }
  }, 
  {
    callbacks: {
      authorized:({token}) => true,
      //todo: activate this later
      // authorized:({token}) => !!token,
    }
  }
);

// export const config = {
//   matcher: ['/dashboard/:path*' ] //'/api/auth/signup'
// };