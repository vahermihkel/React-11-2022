import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AdminHome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/admin/add-product">
        <Button>{t("add-product")}</Button>
      </Link>
      <Link to="/admin/maintain-products">
        <Button>{t("maintain-products")}</Button>
      </Link>
      <Link to="/maintain-categories">
        <Button>{t("maintain-categories")}</Button>
      </Link>
      <Link to="/maintain-shops">
        <Button>{t("maintain-shops")}</Button>
      </Link>
    </div>
  )
}

export default AdminHome