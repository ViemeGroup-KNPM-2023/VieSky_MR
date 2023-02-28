"use strict";

import { Render } from "../Core/core.js";

export const SlidebarNav = (val) => {
    return Render`
    <li><a href="">
        <i class="${val.icon}"></i>
        <span class="SlideBar__tile">${val.title}</span>
    </a></li>
    `
};

export const Slidebar = () => {
    return Render`
    <div class="SlideBar">
        <div class="SlideBar__navigationRail">
            <ul class="SlideBar__list"></ul>
        </div>
        <div class="SlideBar__content">
            <!-- Nội dung của từng trang -->
            <div class="content">
                <div class="navHeader__content">
                    <div class="navHeader__content__left">
                        <a class="navHeader__content__select">
                            <div class="navHeader__content__box">
                                <i class="fas fa-th-large navHeader__content__icon"></i>
                            </div>
                            <p class="navHeader__content__title">Tất cả</p>
                        </a>
                        <a class="navHeader__content__select">
                            <div class="navHeader__content__box">
                                <img src="https://gl.amthuc365.vn/uploads/content/2012/01/04/nhung-mon-khai-vi-ngon-tuyet-1648.jpg" alt="khai-vi">
                            </div>
                            <p class="navHeader__content__title">Khai vị</p>
                        </a>
                        <a class="navHeader__content__select">
                            <div class="navHeader__content__box">
                                <img src="https://static.wixstatic.com/media/d253bb_a3be4c69359147e890d8a1833513d1fb~mv2.jpg/v1/fill/w_532,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d253bb_a3be4c69359147e890d8a1833513d1fb~mv2.jpg" alt="khai-vi">
                            </div>
                            <p class="navHeader__content__title">Món chính</p>
                        </a>
                        <a class="navHeader__content__select">
                            <div class="navHeader__content__box">
                                <img src="https://media.shoptretho.com.vn/upload/image/news/20170809/mach-me-cach-lam-mon-trang-mieng-tu-phomai-8.jpg" alt="khai-vi">
                            </div>
                            <p class="navHeader__content__title">Tráng miệng</p>
                        </a>
                        <a class="navHeader__content__select">
                            <div class="navHeader__content__box">
                                <img src="https://file.hstatic.net/1000268128/file/do-uong-signature-trong-menu-cocktail_2f606fe0568b4fae92a95a425278c25d_grande.png" alt="khai-vi">
                            </div>
                            <p class="navHeader__content__title">Đồ uống</p>
                        </a>
                    </div>
                    <div class="navHeader__content__right">
                        <button type="button" class="btn_add btnHeaderMenu">
                            <div class="box_icon_headermenu">
                                <i class="fas fa-plus-circle"></i>
                            </div>
                            <p class="title">Thêm món</p>
                        </button>
                        <button type="button" class="btn_delete btnHeaderMenu">
                            <div class="box_icon_headermenu">
                                <i class="fas fa-trash"></i>
                            </div>
                            <p class="title">Xóa món</p>
                        </button>
                    </div>
                </div>
                <div class="section-menu">
                    <div class="container-food"></div>
                </div>
            </div>
            <div class="HidenBackground"></div>
        </div>
    </div>
    `
};