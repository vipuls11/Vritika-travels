import mongoose, { Schema, model, models } from 'mongoose';

const inquirySchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    travelMonth: { type: String, required: true },
    message: { type: String, required: true },
    selectedPackage: { type: String, default: '' },
    selectedPackagePrice: { type: String, default: '' },
  },
  { timestamps: true },
);

const Inquiry = models.Inquiry || model('Inquiry', inquirySchema);

export default Inquiry as mongoose.Model<any>;
