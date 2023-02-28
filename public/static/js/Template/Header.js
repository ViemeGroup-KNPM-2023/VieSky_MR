import { Render } from "../Core/core.js"

export const NavbarLeft = () => {
    return Render`
        <div class="Navbar__left">
            <div class="NavBar__logo">
                <button class="btnbar" type="button" name="btnbar">
                    <i class="fas fa-bars"></i>
                </button>
                <a href="/">
                    <img src="assets/images/logo.jfif" alt="logo">
                </a>
            </div>
        </div>
    `
};

export const NavbarCenter = () => {
    return Render`
    <div class="NavBar__center">
        <div class="Navbar__Search Search">
            <input type="search" placeholder="Tìm kiếm">
            <button type="submit" class="btnSearch">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
    `
};

export const NavbarRight = () => {
    return Render`
        <div class="NavBar__right">
            <div class="NavBar__right__infoUser">
                <div class="boxInfo_left">
                    <div id="avatar">
                        <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg" alt="">
                    </div>
                </div>
                <div class="boxInfo_right">
                    <h4 class="NavBar__nameOffice">Quản lý</h4>
                    <h4 class="NavBar__fullName">Nguyễn Văn A</h4>
                </div>
            </div>
        </div>
    `
};

export const Header = () => {
    return Render`
        <div class="NavBar" id="header">
            ${NavbarLeft()}
            ${NavbarCenter()}
            ${NavbarRight()}
        </div>
    `
};