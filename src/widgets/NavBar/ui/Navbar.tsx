import { classNames} from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button.js";
import { useCallback, useState, memo } from "react";
import { LoginModal } from "features/authByUsername";
import { useSelector } from "react-redux";
import { getUserAuthData} from "entities/User";
import { HStack } from "shared/ui/Stack";
import { NotificationBell } from "features/notificationBell";
import { DropdownMenu } from "features/dropdownMenu";
import { useMediaQuery } from "react-responsive"
import { CDrawer } from "shared/ui/CDrawer/CDrawer";
import { NotificationsList } from "entities/Notification";
import { AnimationLazyProvider } from "shared/lib/component";
import { AnimatedModal } from "shared/ui/AnimatedModal/AnimatedModal";
import cls from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = memo(
    ({ className }: NavbarProps) => {
        const { t } = useTranslation();
        const [isOpen, setIsOpen] = useState(false);
        const authData = useSelector(getUserAuthData);
        
        const onCloseModal = useCallback(() => {
            setIsOpen(false);
        }, []);

        const onShowModal = useCallback(() => {
            setIsOpen(true);
        }, []);

        const isMobile = useMediaQuery({
            maxWidth: 767,
        });

          
        if (authData) {
            return (
                <div className={classNames(cls.navbar, [className])}>
                    {/* <AppLink className={cls.createBtn} to={RoutePath.article_create}>Создать статью...</AppLink> */}
                    <HStack gap={"16"} className={cls.actions}>
                        {isMobile? (
                            <CDrawer>
                                <NotificationsList/>
                            </CDrawer>
                        ) : <NotificationBell/>}
                        <DropdownMenu/>
                    </HStack>
                </div>
            );
        }

        return (
            <header className={classNames(cls.navbar, [className])}>
                <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                    {t("Войти")}
                </Button>

                {isOpen && (
                    
                    isMobile ? (
                        <AnimationLazyProvider>
                            <LoginModal
                                ModalContent={AnimatedModal}
                                isOpen={isOpen}
                                onClose={onCloseModal}
                            />
                        </AnimationLazyProvider>

                    ) :
                        (<LoginModal
                            isOpen={isOpen}
                            onClose={onCloseModal}
                        />)
                              
                )}

            </header>
        );
    },
);


