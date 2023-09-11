import { NextRequest, NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/models';

const BACKEND_API = process.env.BACKEND_API;


export async function POST(req: NextRequest) {
  const body = await req.json();
  
  try{
    const resp = await axios.post(`${BACKEND_API}/account/authenticate`, {
      email: body.user,
      password: body.password,
    });
    
    const data : ApiResponse = resp.data;

    
    
    // delete data.jwtToken;
    // localStorage.setItem('token', data.jwtToken);
    // localStorage.setItem('user', JSON.stringify(data));

    return NextResponse.json(data, {
      status: 200
    });

  } catch(error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);

      return NextResponse.json(error.response?.data as ApiResponse, {
        status: error.response?.status,
      });
    }
  }
}