import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const ErrorPage = () => {
    return (
        <Wrapper>
            <h3>
            Oops! That page can’t be found.
            </h3>
            <Link to="/" className='primary-btn'>Quay về trang chủ</Link >
        </Wrapper>
    )
}
const Wrapper = styled.main`

height: 52vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a{
        margin-top: 24px;
        padding: 12px 24px;
    }
`
export default ErrorPage
