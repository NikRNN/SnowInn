import { useTranslation } from "react-i18next";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";


function ForbiddenPage() {
    const { t } = useTranslation("about");
    return (
        <PageWrapper>
            Доступ к данной странице отсутствует...
        </PageWrapper>
    );
}

export default ForbiddenPage