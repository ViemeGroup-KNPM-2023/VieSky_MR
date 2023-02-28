"use strict";

import { Render } from "../Core/core.js";

export const Food = (val) => {
    return Render`
    <div class="box-food">
        <div class="img-food">
            <img src="${val.ImgLink}" alt="món ăn">
            <input type="checkbox" id="checkbox" class="checkbox-food">
        </div>
        <h3 class="title">${val.NameFood}</h3>
        <p class="subTitle">${val.TypeFood}</p>
        <div class="box-food__footer">
            <div class="box-food__footer__left">
                <p class="cost-food">${val.CostFood} ${val.TypeCost}</p>
            </div>
            <div class="box-food__footer__right">
                <button type="button">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        </div>
    </div>
    `
};

export const CreateFood = () => {
    return Render`
    <div class="Form_AddFood">
        <div class="Form_AddFood__header">
            <h1>Thêm món</h1>
        </div>
        <hr />
        <div class="Form_AddFood_ID">
            <h3>Mã món:</h3>
            <h3 class="ID_Food">#ch20</h3>
        </div>
        <div class="Form-CreateFood">
            <div class="Form-CreateFood-Left">
                <div class="Create_NameFood">
                    <h3>Tên món</h3>
                    <input type="text" placeholder="Nhập tên món">
                </div>
                <div class="Create_TypeFood">
                    <h3>Loại món</h3>
                    <div class="box_typeFood">
                        <div>Chọn loại món</div>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </div>
                <div class="dropMenu">
                    <div class="itemMenu">
                        <span>Khai vị</span>
                    </div>
                    <div class="itemMenu">
                        <span>Món chính</span>
                    </div>
                    <div class="itemMenu">
                        <span>Tráng miệng</span>
                    </div>
                    <div class="itemMenu">
                        <span>Đồ uống</span>
                    </div>
                </div>
                <div class="Create_CostFood">
                    <h3>Đơn giá</h3>
                    <input type="text" placeholder="Nhập giá món">
                </div>
            </div>
            <div class="Form-CreateFood-Right">
                <div class="Create_ImageFood">
                    <h3>Ảnh món</h3>
                    <input type="file">
                    <div class="show-img">
                        <div class="img_box">
                            <i class="fas fa-image"></i>
                            <p>Hiển thị ảnh đăng tải lên</p>
                        </div>
                    </div>
                </div>
                <div class="container_btnCreateFood">
                    <button type="button" class="Exit__CreateFood">Hủy</button>
                    <button type="button" class="Add__CreateFood">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    `
}


