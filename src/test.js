const test = []

export default {
    enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
    bid: "IEBB20200806175128215",
    carBrand: "保时捷",
    carModel: "保时捷Panamera",
    carDesc: "保时捷Panamera GTS 2014款 4.8L 四驱 DCT",
    partsNum: 7,
    brandPicName: "",
    createdAt: "2020-08-06 17:51:28",
    status: "TIMEOUT",
    vinCode: "11111111111111111",
    vinCodePic: "https://stg.iobs.pingan.com.cn/download/aias-aptp-public-sf-stg-pri/product-43c08c303b404cd8bddff2251091f481?e=1596708238&token=V9DDC0WWCK6DFKdVV0V6dJMI096622J9:_i1VH2NXpGkoSogfLrdDXdTQ68k=",
    source: "AUTONOMIC_INSURANCE_CLAIM",
    expectedDay: "不限",
    buyerAccountName: "围绕",
    buyerAccountConcat: "18205083666",
    buyerCompanyName: "君山公司洛阳分舵",
    buyerCompanyProvince: "上海",
    buyerCompanyCity: "上海",
    buyerCompanyCounty: "浦东新区",
    buyerCompanyAddress: "张江镇益江路",
    buyerCompanyConcat: "",
    isInvoiceRequired: false,
    hasOfferVendorCompanyNum: 1,
    hasConfirmPartsNum: 7,
    vendorOfferInfoList: [
      {
        vendorCompanyProvince: "山东",
        vendorCompanyCity: "青岛",
        vendorCompanyName: "测试ct003",
        vendorCompanyConcat: "",
        status: "TIMEOUT",
        partEnquiries: null,
        ackTime: null
      },
      {
        vendorCompanyProvince: "上海",
        vendorCompanyCity: "上海",
        vendorCompanyName: "测试财务的公司",
        vendorCompanyConcat: "",
        status: "OFFER",
        partEnquiries: [
          {
            partEnquiryId: "0ecc368b-042d-4905-a320-d3855f6298f2",
            partName: "人证",
            oeCode: "",
            partQualityItems: [
              {
                favoriteQuality: "6",
                partsTypeName: "认证件",
                isAppend: false
              },
              {
                favoriteQuality: "1",
                partsTypeName: "原厂流通件",
                isAppend: true
              }
            ],
            quantity: 1,
            remarks: null,
            photo: null,
            offer: {
              offerId: "1a56f756-8fa4-4da4-a988-3b255d6ed4ee",
              offerStatus: "ACCEPT",
              includeTax: false,
              partOffers: [
                {
                  commodity: "人证",
                  partOfferId: "28dcb956-fbb3-4cdf-82dc-03f08d63b9b7",
                  price: 2,
                  partOfferStatus: "ACCEPT",
                  partQuality: "NSF_AUTH",
                  partsTypeName: "认证件",
                  brand: null,
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                },
                {
                  commodity: "人证",
                  partOfferId: "9f747c9f-4247-4fab-9ffd-c4d4df32e78f",
                  price: 1,
                  partOfferStatus: "ACCEPT",
                  partQuality: "OEM_NO_MARK",
                  partsTypeName: "原厂流通件",
                  brand: null,
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            isAppend: true
          },
          {
            partEnquiryId: "2b1c94f4-e9da-4a8c-8028-12cac70d5104",
            partName: "回用",
            oeCode: "97010604400",
            partQualityItems: [
              {
                favoriteQuality: "3",
                partsTypeName: "拆车件",
                isAppend: false
              }
            ],
            quantity: 1,
            remarks: "",
            photo: null,
            offer: {
              offerId: "1a56f756-8fa4-4da4-a988-3b255d6ed4ee",
              offerStatus: "ACCEPT",
              includeTax: false,
              partOffers: [
                {
                  commodity: "",
                  partOfferId: "aeaf925f-97e9-4f31-b729-b3fa879b4c9f",
                  price: 5,
                  partOfferStatus: "ACCEPT",
                  partQuality: "RENEW",
                  partsTypeName: "拆车件",
                  brand: "",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            isAppend: false
          },
          {
            partEnquiryId: "407de55e-7277-45d8-a15c-3efaa73f777a",
            partName: "配套厂",
            oeCode: "97053890118",
            partQualityItems: [
              {
                favoriteQuality: "2",
                partsTypeName: "品牌件",
                isAppend: false
              }
            ],
            quantity: 1,
            remarks: "",
            photo: null,
            offer: {
              offerId: "1a56f756-8fa4-4da4-a988-3b255d6ed4ee",
              offerStatus: "ACCEPT",
              includeTax: false,
              partOffers: [
                {
                  commodity: "",
                  partOfferId: "99e4bc1d-4762-433f-81f3-b95ad412799a",
                  price: 3,
                  partOfferStatus: "ACCEPT",
                  partQuality: "BRANDED",
                  partsTypeName: "品牌件",
                  brand: "12",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            isAppend: false
          },
          {
            partEnquiryId: "4cadcee0-625a-4769-a52a-7abb4d456054",
            partName: "1756",
            oeCode: "",
            partQualityItems: [
              {
                favoriteQuality: "1",
                partsTypeName: "原厂流通件",
                isAppend: false
              }
            ],
            quantity: 1,
            remarks: null,
            photo: null,
            offer: {
              offerId: "1a56f756-8fa4-4da4-a988-3b255d6ed4ee",
              offerStatus: "ACCEPT",
              includeTax: false,
              partOffers: [
                {
                  commodity: "1756",
                  partOfferId: "a6f824a1-73b9-4b23-87a0-c8fc01ae2229",
                  price: 1,
                  partOfferStatus: "ACCEPT",
                  partQuality: "OTHER",
                  partsTypeName: "其它",
                  brand: null,
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                },
                {
                  commodity: "1756",
                  partOfferId: "bc7d5327-179a-4ec9-b54c-d017c60b8473",
                  price: null,
                  partOfferStatus: "OUT_OF_STOCK",
                  partQuality: "OEM_NO_MARK",
                  partsTypeName: "原厂流通件",
                  brand: null,
                  leadDay: "现货",
                  qualityAssurancePeriod: null,
                  remark: null
                }
              ]
            },
            isAppend: true
          },
          {
            partEnquiryId: "93089326-4e0c-446c-a8ea-fac6b5a9bc5c",
            partName: "售后",
            oeCode: "94810394120",
            partQualityItems: [
              {
                favoriteQuality: "5",
                partsTypeName: "售后品牌件",
                isAppend: false
              }
            ],
            quantity: 1,
            remarks: "",
            photo: null,
            offer: {
              offerId: "1a56f756-8fa4-4da4-a988-3b255d6ed4ee",
              offerStatus: "ACCEPT",
              includeTax: false,
              partOffers: [
                {
                  commodity: "",
                  partOfferId: "775f67ae-25f0-45aa-9c3b-62a33e8545db",
                  price: 2,
                  partOfferStatus: "ACCEPT",
                  partQuality: "BRANDED_LOW_PRICE",
                  partsTypeName: "售后品牌件",
                  brand: "12",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            isAppend: false
          },
          {
            partEnquiryId: "b5a05551-3a87-4621-a508-6a5665beda7a",
            partName: "原厂",
            oeCode: "",
            partQualityItems: [
              {
                favoriteQuality: "1",
                partsTypeName: "原厂流通件",
                isAppend: false
              }
            ],
            quantity: 1,
            remarks: "",
            photo: null,
            offer: {
              offerId: "1a56f756-8fa4-4da4-a988-3b255d6ed4ee",
              offerStatus: "ACCEPT",
              includeTax: false,
              partOffers: [
                {
                  commodity: "",
                  partOfferId: "d98b65ca-56de-4366-8f6f-a3f2c1da2e8a",
                  price: 1,
                  partOfferStatus: "ACCEPT",
                  partQuality: "OEM_NO_MARK",
                  partsTypeName: "原厂流通件",
                  brand: "",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            isAppend: false
          },
          {
            partEnquiryId: "c02c2caf-eedf-4e99-9782-2ab75338deec",
            partName: "再制造",
            oeCode: "",
            partQualityItems: [
              {
                favoriteQuality: "7",
                partsTypeName: "再制造件",
                isAppend: false
              }
            ],
            quantity: 1,
            remarks: "",
            photo: null,
            offer: {
              offerId: "1a56f756-8fa4-4da4-a988-3b255d6ed4ee",
              offerStatus: "ACCEPT",
              includeTax: false,
              partOffers: [
                {
                  commodity: "",
                  partOfferId: "f2b61eed-96cb-4e6a-b0d7-3a7ce1cc43d3",
                  price: 4,
                  partOfferStatus: "ACCEPT",
                  partQuality: "REFABRICATION",
                  partsTypeName: "再制造件",
                  brand: "",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            isAppend: false
          }
        ],
        ackTime: 1596707510000
      }
    ],
    parts: [
      {
        id: "b5a05551-3a87-4621-a508-6a5665beda7a",
        enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
        partName: "原厂",
        oeCode: "",
        quantity: 1,
        remarks: "",
        favoriteQualities: "1",
        status: "CONFIRM",
        photo: null,
        createdAt: 1596707488226
      },
      {
        id: "93089326-4e0c-446c-a8ea-fac6b5a9bc5c",
        enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
        partName: "售后",
        oeCode: "94810394120",
        quantity: 1,
        remarks: "",
        favoriteQualities: "5",
        status: "CONFIRM",
        photo: null,
        createdAt: 1596707488236
      },
      {
        id: "407de55e-7277-45d8-a15c-3efaa73f777a",
        enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
        partName: "配套厂",
        oeCode: "97053890118",
        quantity: 1,
        remarks: "",
        favoriteQualities: "2",
        status: "CONFIRM",
        photo: null,
        createdAt: 1596707488247
      },
      {
        id: "c02c2caf-eedf-4e99-9782-2ab75338deec",
        enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
        partName: "再制造",
        oeCode: "",
        quantity: 1,
        remarks: "",
        favoriteQualities: "7",
        status: "CONFIRM",
        photo: null,
        createdAt: 1596707488257
      },
      {
        id: "2b1c94f4-e9da-4a8c-8028-12cac70d5104",
        enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
        partName: "回用",
        oeCode: "97010604400",
        quantity: 1,
        remarks: "",
        favoriteQualities: "3",
        status: "CONFIRM",
        photo: null,
        createdAt: 1596707488267
      },
      {
        id: "0ecc368b-042d-4905-a320-d3855f6298f2",
        enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
        partName: "人证",
        oeCode: "",
        quantity: 1,
        remarks: null,
        favoriteQualities: "6,1",
        status: "CONFIRM",
        photo: null,
        createdAt: 1596707561795
      },
      {
        id: "4cadcee0-625a-4769-a52a-7abb4d456054",
        enquiryId: "bb750b70-790d-46b3-8199-43cfd01b9999",
        partName: "1756",
        oeCode: "",
        quantity: 1,
        remarks: null,
        favoriteQualities: "1",
        status: "CONFIRM",
        photo: null,
        createdAt: 1596707806942
      }
    ],
    followUps: [
      
    ],
    sendToRemote: null,
    isChosenVendor: null,
    remoteCity: null,
    relatedEnquiryBid: null,
    relatedEnquiryId: null,
    invoiceType: null,
    vendorSelectType: null,
    newVendorOfferPart: {
      partItemList: [
        {
          partEnquiryId: "0ecc368b-042d-4905-a320-d3855f6298f2",
          partName: "人证",
          partNum: 1,
          partQualityItems: [
            {
              favoriteQuality: "6",
              partsTypeName: "认证件",
              isAppend: false,
              remarks: null
            },
            {
              favoriteQuality: "1",
              partsTypeName: "原厂流通件",
              isAppend: false,
              remarks: null
            }
          ],
          vendorOfferInfos: [
            {
              vendorCompanyName: "测试财务的公司",
              newPartOfferList: [
                {
                  includeTax: false,
                  partOfferId: "28dcb956-fbb3-4cdf-82dc-03f08d63b9b7",
                  partEnquiryId: "0ecc368b-042d-4905-a320-d3855f6298f2",
                  price: 2,
                  partOfferStatus: "ACCEPT",
                  partQuality: "6",
                  partsTypeName: "认证件",
                  brand: null,
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                },
                {
                  includeTax: false,
                  partOfferId: "9f747c9f-4247-4fab-9ffd-c4d4df32e78f",
                  partEnquiryId: "0ecc368b-042d-4905-a320-d3855f6298f2",
                  price: 1,
                  partOfferStatus: "ACCEPT",
                  partQuality: "1",
                  partsTypeName: "原厂流通件",
                  brand: null,
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            {
              vendorCompanyName: "测试ct003",
              newPartOfferList: [
                
              ]
            }
          ]
        },
        {
          partEnquiryId: "2b1c94f4-e9da-4a8c-8028-12cac70d5104",
          partName: "回用",
          partNum: 1,
          partQualityItems: [
            {
              favoriteQuality: "3",
              partsTypeName: "拆车件",
              isAppend: false,
              remarks: ""
            }
          ],
          vendorOfferInfos: [
            {
              vendorCompanyName: "测试财务的公司",
              newPartOfferList: [
                {
                  includeTax: false,
                  partOfferId: "aeaf925f-97e9-4f31-b729-b3fa879b4c9f",
                  partEnquiryId: "2b1c94f4-e9da-4a8c-8028-12cac70d5104",
                  price: 5,
                  partOfferStatus: "ACCEPT",
                  partQuality: "3",
                  partsTypeName: "拆车件",
                  brand: "",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            {
              vendorCompanyName: "测试ct003",
              newPartOfferList: [
                
              ]
            }
          ]
        },
        {
          partEnquiryId: "407de55e-7277-45d8-a15c-3efaa73f777a",
          partName: "配套厂",
          partNum: 1,
          partQualityItems: [
            {
              favoriteQuality: "2",
              partsTypeName: "品牌件",
              isAppend: false,
              remarks: ""
            }
          ],
          vendorOfferInfos: [
            {
              vendorCompanyName: "测试财务的公司",
              newPartOfferList: [
                {
                  includeTax: false,
                  partOfferId: "99e4bc1d-4762-433f-81f3-b95ad412799a",
                  partEnquiryId: "407de55e-7277-45d8-a15c-3efaa73f777a",
                  price: 3,
                  partOfferStatus: "ACCEPT",
                  partQuality: "2",
                  partsTypeName: "品牌件",
                  brand: "12",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            {
              vendorCompanyName: "测试ct003",
              newPartOfferList: [
                
              ]
            }
          ]
        },
        {
          partEnquiryId: "4cadcee0-625a-4769-a52a-7abb4d456054",
          partName: "1756",
          partNum: 1,
          partQualityItems: [
            {
              favoriteQuality: "1",
              partsTypeName: "原厂流通件",
              isAppend: false,
              remarks: null
            },
            {
              favoriteQuality: "4",
              partsTypeName: "其它",
              isAppend: false,
              remarks: null
            }
          ],
          vendorOfferInfos: [
            {
              vendorCompanyName: "测试财务的公司",
              newPartOfferList: [
                {
                  includeTax: null,
                  partOfferId: "bc7d5327-179a-4ec9-b54c-d017c60b8473",
                  partEnquiryId: "4cadcee0-625a-4769-a52a-7abb4d456054",
                  price: null,
                  partOfferStatus: "OUT_OF_STOCK",
                  partQuality: "1",
                  partsTypeName: "原厂流通件",
                  brand: null,
                  leadDay: "无货",
                  qualityAssurancePeriod: null,
                  remark: null
                },
                {
                  includeTax: false,
                  partOfferId: "a6f824a1-73b9-4b23-87a0-c8fc01ae2229",
                  partEnquiryId: "4cadcee0-625a-4769-a52a-7abb4d456054",
                  price: 1,
                  partOfferStatus: "ACCEPT",
                  partQuality: "4",
                  partsTypeName: "其它",
                  brand: null,
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            {
              vendorCompanyName: "测试ct003",
              newPartOfferList: [
                
              ]
            }
          ]
        },
        {
          partEnquiryId: "93089326-4e0c-446c-a8ea-fac6b5a9bc5c",
          partName: "售后",
          partNum: 1,
          partQualityItems: [
            {
              favoriteQuality: "5",
              partsTypeName: "售后品牌件",
              isAppend: false,
              remarks: ""
            }
          ],
          vendorOfferInfos: [
            {
              vendorCompanyName: "测试财务的公司",
              newPartOfferList: [
                {
                  includeTax: false,
                  partOfferId: "775f67ae-25f0-45aa-9c3b-62a33e8545db",
                  partEnquiryId: "93089326-4e0c-446c-a8ea-fac6b5a9bc5c",
                  price: 2,
                  partOfferStatus: "ACCEPT",
                  partQuality: "5",
                  partsTypeName: "售后品牌件",
                  brand: "12",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            {
              vendorCompanyName: "测试ct003",
              newPartOfferList: [
                
              ]
            }
          ]
        },
        {
          partEnquiryId: "b5a05551-3a87-4621-a508-6a5665beda7a",
          partName: "原厂",
          partNum: 1,
          partQualityItems: [
            {
              favoriteQuality: "1",
              partsTypeName: "原厂流通件",
              isAppend: false,
              remarks: ""
            }
          ],
          vendorOfferInfos: [
            {
              vendorCompanyName: "测试财务的公司",
              newPartOfferList: [
                {
                  includeTax: false,
                  partOfferId: "d98b65ca-56de-4366-8f6f-a3f2c1da2e8a",
                  partEnquiryId: "b5a05551-3a87-4621-a508-6a5665beda7a",
                  price: 1,
                  partOfferStatus: "ACCEPT",
                  partQuality: "1",
                  partsTypeName: "原厂流通件",
                  brand: "",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            {
              vendorCompanyName: "测试ct003",
              newPartOfferList: [
                
              ]
            }
          ]
        },
        {
          partEnquiryId: "c02c2caf-eedf-4e99-9782-2ab75338deec",
          partName: "再制造",
          partNum: 1,
          partQualityItems: [
            {
              favoriteQuality: "7",
              partsTypeName: "再制造件",
              isAppend: false,
              remarks: ""
            }
          ],
          vendorOfferInfos: [
            {
              vendorCompanyName: "测试财务的公司",
              newPartOfferList: [
                {
                  includeTax: false,
                  partOfferId: "f2b61eed-96cb-4e6a-b0d7-3a7ce1cc43d3",
                  partEnquiryId: "c02c2caf-eedf-4e99-9782-2ab75338deec",
                  price: 4,
                  partOfferStatus: "ACCEPT",
                  partQuality: "7",
                  partsTypeName: "再制造件",
                  brand: "",
                  leadDay: "现货",
                  qualityAssurancePeriod: "12",
                  remark: ""
                }
              ]
            },
            {
              vendorCompanyName: "测试ct003",
              newPartOfferList: [
                
              ]
            }
          ]
        }
      ]
    }
  }
  