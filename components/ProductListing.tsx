// import React from 'react';
// import AllProductItem from './AllProductItem';

// type Props = {
//     products: Record<string, any>[];
// }

// const ProductListing = ({products}: Props) => {
//     return (
//         <div className="relative border overflow-hidden border-red-500">
//             <div className="border flex flex-row w-full overflow-x-hidden">
//                 {
//                     products?.map((item: Record<string, any>, index: number) => {
//                         return (
//                             <div key={index} className="flex w-full min-w-[260px] mr-5">
//                                 <AllProductItem item={item} />
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default ProductListing


import React from 'react';
import AllProductItem from './AllProductItem';

type Props = {
    products: Record<string, any>[];
}

const AllProduct = ({products}: Props) => {
    return (
        <div className="">
            <div className="grid grid-cols-4 gap-x-3 gap-y-6">
                {
                    products.map((item: Record<string, any>, index: number) => {
                        return (
                            <div key={index} className="">
                                <AllProductItem item={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct


// // import React from 'react';
// // import AllProductItem from './AllProductItem';

// // type Props = {
// //     products: Record<string, any>[];
// // }

// // const ProductListing = ({products}: Props) => {
// //     // grid grid-cols-4 gap-3
// //     return (
// //         <div className="relative border overflow-x-hidden overflow-y-hidden block py-4">
// //             <div className="overflow-y-hidden h-56 flex flex-col">
// //                 <div className="w-full h-full">
// //                     <div className="overflow-x-hidden border overflow-y-hidden w-[80%] h-full flex flex-row">
// //                         <div className="w-full min-w-full flex flex-row items-start justify-start">
// //                             {
// //                                 products?.map((item: Record<string, any>, index: number) => {
// //                                     return (
// //                                         <AllProductItem key={index} item={item} />
// //                                     )
// //                                 })
// //                             }
// //                         </div>
// //                     </div>
// //                 </div>
                
// //             </div>
// //         </div>
// //     )
// // }

// // export default ProductListing