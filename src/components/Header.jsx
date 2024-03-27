import { Flex, Image, Button, Link, useColorMode } from "@chakra-ui/react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import userAtom from "../atoms/userAtom"
import authAtom from "../atoms/authAtom"
import { AiFillHome } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import {BsFillChatQuoteFill} from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi"
import useLogOut from "../Hooks/useLogOut"


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const user = useRecoilValue(userAtom)
    const logout = useLogOut()
    const setAuthScreen = useSetRecoilState(authAtom)
    return (
        <Flex justifyContent={"space-between"} mt={6} mb={12}>
            {user && (
                <Link as={RouterLink} to='/'><AiFillHome size={24} /></Link>
            )}
            {!user && (
                <Link as={RouterLink} to={'/auth'} onClick={
                    () => setAuthScreen('login')
                }>Login</Link>
            )}
            <Image
                cursor={"pointer"}
                alt='logo'
                w={6}
                src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
                onClick={toggleColorMode}
            />
            {user && (
                <Flex alignItems={'center'} gap={4}>

                    <Link as={RouterLink} to={`/${user.username}`}>
                        <RxAvatar size={24} />
                    </Link>
                    {/* Chat ICON */}
                    {/* <Link as={RouterLink} to={`/chat`}>
                        <BsFillChatQuoteFill size={20} />
                    </Link> */}

                    {/* <Button
                        size={'xs'}
                        onClick={logout}
                    ><FiLogOut size={20} /></Button> */}
                </Flex>
            )}
            {!user && (
                <Link as={RouterLink} to={'/auth'} onClick={
                    () => setAuthScreen('signup')
                }>Signup</Link>
            )}
        </Flex>
    )
}

export default Header