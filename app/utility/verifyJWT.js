import { jwtVerify } from "jose";

async function verifyJWT(token) {
    try {
        const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

        const { payload } = await jwtVerify(token, secret, {
            clockTolerance: 30
        });

        return payload;
    } catch {
        return null;
    }
}

export default verifyJWT;