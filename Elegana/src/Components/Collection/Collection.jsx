import React from 'react'
import './Collection.css'
import { MainHeading } from "../MainHeading";
import { CollectionItem } from '../CollectionItem/CollectionItem'
import { collectionDetails } from "../Assets/productInfo";
export const Collection = () => {
    return (
        <section className="collection-section">
            <div className="container">
                <MainHeading>Collection</MainHeading>
                <div className="row justify-content-between mt-20">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <CollectionItem img={collectionDetails[0]["image"]}
                            name={collectionDetails[0]["name"]} className="collection-box1" />
                        <CollectionItem img={collectionDetails[1]["image"]}
                            name={collectionDetails[1]["name"]} className="collection-box2 mt-30" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-mt-30 sm-mt-30 md-mt-30">
                        <CollectionItem img={collectionDetails[2]["image"]}
                            name={collectionDetails[2]["name"]} className="collection-box3" />
                        <CollectionItem img={collectionDetails[3]["image"]}
                            name={collectionDetails[3]["name"]} className="collection-box4 mt-30" />
                    </div>
                </div>
            </div>
        </section>
    )
}
