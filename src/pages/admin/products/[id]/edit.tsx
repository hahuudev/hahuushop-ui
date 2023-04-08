import AdminLayout from '@/layouts/AdminLayout';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react'

type Props = {}

const EditProduct = (props: Props) => {
    const router = useRouter()
    const _id = router.query.id
    console.log(_id)
  return (
    <div>EditProduct</div>
  )
}

EditProduct.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};

export default EditProduct