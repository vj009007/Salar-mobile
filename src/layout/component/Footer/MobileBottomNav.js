import React, { useState } from "react";
const MobileBottomNav = () => {
    return (
        <>
            <nav class="mobile-bottom-nav">
                <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
                    <div class="mobile-bottom-nav__item-content">
                        <i class="material-icons">home</i> Home
                    </div>
                </div>
                <div class="mobile-bottom-nav__item">
                    <div class="mobile-bottom-nav__item-content">
                        <i class="material-icons">category</i> Category
                    </div>
                </div>
                <div class="mobile-bottom-nav__item">
                    <div class="mobile-bottom-nav__item-content">
                        <i class="material-icons">account_circle</i> My Account
                    </div>
                </div>

                <div class="mobile-bottom-nav__item">
                    <div class="mobile-bottom-nav__item-content">
                        <i class="material-icons">account_balance_wallet</i>Wallet
                    </div>
                </div>
                <div class="mobile-bottom-nav__item">
                    <div class="mobile-bottom-nav__item-content">
                        <i class="material-icons"> currency_rupee</i> Withdrawl
                    </div>
                </div>
                <div class="mobile-bottom-nav__item">
                    <div class="mobile-bottom-nav__item-content">
                        <i class="material-icons"> shopping_cart</i> Cart
                    </div>
                </div>
            </nav>
        </>
    );
}
export default MobileBottomNav;