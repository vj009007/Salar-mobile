import React from 'react'

function AddProduct() {
  return (
      <div className="row">
          <div className="col-12">
              <div className="card">
                  {/* Card header */}
                  <div className="card-header pb-0">
                      <div className="d-lg-flex">
                          <div>
                              <nav aria-label="breadcrumb">
                                  <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                      <li className="breadcrumb-item text-sm">
                                          <a className="opacity-3 text-dark" href="/"> <i className="fa fa-home" aria-hidden="true" />
                                          </a>
                                      </li>
                                      <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="/">Product</a>
                                      </li>
                                      <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Add</li>
                                  </ol>
                              </nav>
                              <h5 className="mt-4 mb-0">Add Ecommerce Product</h5>
                          </div>
                      </div>
                  </div>
                  <div className="card-body">
                      <form className="pt-3" action="/" method="POST" encType="multipart/form-data">
                          <div className="row border-bottom my-4">
                              <div className="col-md-4">
                                  <label className="product_type">Product Type</label>
                                  <select className="form-control plan-bind" name="prod_type" id="s-sizes" required>
                                      <option value={0}>Digital</option>
                                      <option value={1}>Physical</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label className ="category">Category</label>
                                  <select className="form-control" name="category_id" id="choices-category" required>
                                      <option value>Select</option>
                                      <option value />
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label className="sub_category">SubCategory</label>
                                  <select className="form-control" name="subcategory_id" id="ecomm-choices-sub-category">
                                      <option value>Select</option>
                                      <option value />
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label className ="child_category">Child Category</label>
                                  <select className="form-control" name="childcategory_id" id="ecomm-choices-child-category">
                                      <option value>Select</option>
                                      <option value>
                                      </option>
                                  </select>
                              </div>
                          </div>
                          <div className="row my-4  border-bottom" id="attr-list">
                              <div className="col-md-4">
                                  <label className="name">Name</label>
                                  <select className="form-control" name="child" id="/">
                                      <option value />
                                  </select>
                              </div>
                          </div>
                          <div className="row my-4 border-bottom">
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Product Name</label>
                                      <input type="text" className="form-control" name="name" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <label className ="brand">Brand</label>
                                  <select className="form-control" name="brand_id" id="choices-brand" required>
                                      <option value>Select</option>
                                      <option value>
                                      </option>
                                  </select>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label>Product Image</label>
                                      <input type="file" id="photos" name="file" className="form-control file-upload-info file-upload-default" multiple />
                                  </div>
                                  <div className="row">
                                      <div className="col-md-12">
                                          <ul id="photos_clearing" className="clearing-thumbs pl-0 d-flex flex-nowrap" data-clearing>
                                              <li>
                                                  <img className="img border-radius-lg" src="/"  alt="borderimage" />
                                              </li>
                                              <a href="/product/imgdel/"> <i className="fa fa-trash-o text-danger" aria-hidden="true" /></a>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label> Gallary Image</label>
                                      <input type="file" id="gallary_image" name="gallary_image" className="form-control file-upload-info file-upload-default" />
                                      <img src="/" className="table-img" alt="galleryImage" />
                                  </div>
                              </div>
                              <div className="col-md-8">
                                  <div className="form-group">
                                      <label>Description</label>
                                      <textarea className="form-control" id="exampleFormControlTextarea1" rows={2} name="description" defaultValue={""} />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Minimum Purchase Quantity</label>
                                      <input type="number" className="form-control" name="min_purchase_qty" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Maximum Purchase Quantity</label>
                                      <input type="number" className="form-control" name="max_purchase_qty" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>SKU</label>
                                      <input type="text" className="form-control" name="sku" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <label>Barcode</label>
                                  <div className="input-group mb-3">
                                      <input type="number" className="form-control" aria-label="Barcode" name="barcode" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Unit Price</label>
                                      <input type="number" className="form-control" name="unit_price" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Company Commission</label>
                                      <input type="number" className="form-control" name="commision" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <label className="gst">GST CODE</label>
                                  <select className="form-control" name="gst_code" id="ecomm-choices-gst-code" required>
                                      <option value>Select</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <label className="gst">GST (%)</label>
                                  <select className="form-control" name="gst_percent" id="ecomm-choices-gst-percent" required>
                                      <option value={0}>Select</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>GST Charge</label>
                                      <input type="number" className="form-control" name="gst_amount" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Final Price</label>
                                      <input type="number" className="form-control" name="final_price" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Courier charges </label>
                                      <input type="number" className="form-control" name="courier_chr" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Packaging Charges</label>
                                      <input type="number" className="form-control" name="pck_chrgs" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Handling Charges</label>
                                      <input type="number" className="form-control" name="handling_chrgs" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Sponsor Commission</label>
                                      <input type="number" className="form-control" name="sponsor_commission" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Discounts Points Applicable</label>
                                      <input type="number" className="form-control" name="discout_point_aplicable" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <label className="return">Returns Acceptable</label>
                                  <select className="form-control plan-bind" name="return_applicable" id="s-sizes" required>
                                      <option value={0}>YES</option>
                                      <option value={1}>NO</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Cancellation Charges</label>
                                      <input type="number" className="form-control" name="cancel_chrgs" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <label className="refund">Refund</label>
                                  <select className="form-control plan-bind" name="refund_applicable" id="s-sizes" required>
                                      <option value={0}>YES</option>
                                      <option value={1}>NO</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Refund Amount</label>
                                      <input type="number" className="form-control" name="refund_amount" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <label className="replace">Replacement</label>
                                  <select className="form-control plan-bind" name="replacement_applicable" id="s-sizes" required>
                                      <option value={0}>YES</option>
                                      <option value={1}>NO</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Replacement Days</label>
                                      <input type="number" className="form-control" name="replacement_day" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <label className="delivery">Delivery Location</label>
                                  <select className="form-control plan-bind" name="delivery_location" id="s-sizes" required>
                                      <option value={0}>INDIA</option>
                                      <option value={1}>GLOBAL</option>
                                  </select>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Shipping Days</label>
                                      <input type="number" className="form-control" name="shipping_day" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Stock</label>
                                      <input type="number" className="form-control" name="stock" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="form-group">
                                      <label>Low Stock Warning</label>
                                      <input type="number" className="form-control" name="low_stock_warning" defaultValue />
                                  </div>
                              </div>
                              <div className="row my-4  border-bottom">
                                  <div className="col-md-4">
                                      <label>Featured Product</label>
                                      <div className="form-check form-switch">
                                          <input className="form-check-input " type="checkbox" name="featured_product" id="featured_product" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row my-4  border-bottom">
                              <div className="col-md-4">
                                  <label className="status">Status</label>
                                  <select className="form-control plan-bind" name="status" id="s-sizes" required>
                                      <option value={0}>PENDING</option>
                                      <option value={1}>APPROVED</option>
                                      <option value={2}>REJECTED</option>
                                  </select>
                              </div>
                          </div>
                          <div className="row my-4">
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label>Meta Title</label>
                                      <input type="text" className="form-control" name="meta_title" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                      <label>Meta keyword</label>
                                      <input type="text" className="form-control" name="meta_keywords" defaultValue />
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="form-group">
                                      <label>Meta Description</label>
                                      <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} name="mets_desc" defaultValue={"Desc"} />
                                  </div>
                              </div>
                          </div>
                          <div className="row pt-5">
                              <div className="col-md-12 text-center border-top pt-4">
                                  <button type="submit" className="btn btn-primary mx-2">Submit</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default AddProduct