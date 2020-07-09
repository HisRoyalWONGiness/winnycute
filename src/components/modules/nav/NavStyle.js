import styled from 'styled-components'

export const NavStyle = styled.div `
    display: flex;
    justify-content: space-between;
    position: fixed;
    color: white;
    top: 0px;
    width: 100%;
    height: 8vh;
    background: #0D0D0D;
    transition: 1s;

    .logo{
        position: relative;
        top: 1em;
        left: 1em;

        img{
            left: 2em;
        }
    }

    .nav_items{
        position: relative;
        display: flex;
        justify-content: space-between;
        right: 1em;
        top: 1em;

        .single_item{
            margin-left: 1em;
            margin-right: 1em;
        }

        a{
            color: white;
            text-decoration: none;
        }
    }
`