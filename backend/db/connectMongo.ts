import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

const cached = (global.mongooseCache ??= {
  conn: null,
  promise: null,
});

export default async function connectMongo() {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is missing from .env.local');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'Vritika_travel',
    });
    console.log('MongoDB connection promise created');
  }

  try {
    cached.conn = await cached.promise;
    console.log('MongoDB connected successfully');
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error('MongoDB connection failed:', error);
    throw error;
  }
}