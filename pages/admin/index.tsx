import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { TokenType } from '../../dataTypes/types';

export default function AdminPage() {
	const router = useRouter();
    useEffect(() => {
        if (typeof window !== "undefined") {
			const token = localStorage.getItem('token')
			if (!token) {
                router.replace("/")
				
			} else{
                const decodedToken: TokenType = jwtDecode(token as string);
                if(decodedToken.role !== "admin"){
                    router.push("/")
                }
            }

		}
    }, [])
	return (
		<div>Admin Dashboard</div>
	)
}
