import firestore from "./../firebase";

export const getFBProducts = async () => {
    const col = firestore.collection("product");

    const queryData = await col.get();

    const documents = queryData.docs;

    return documents.map((doc) => ({
        id: doc.id,
        title: doc.title,
        category: doc.category,
        description: doc.description,
        price: doc.price,
        image: doc.image,
        ratingRate: doc.ratingRate,
        ratingCount: doc.ratingCount,
        quantity: doc.Quantity,
        ...doc.data(),
    }));
};

// D in CRUD
export const deleteProducts = async (id) => {
    // DocumentReference
    const col = firestore.collection("product").doc(id);
    // DocumentReference.delete
    await col.delete();
};

// U in CRUD
export const updateFBProducts = async (id, record) => {
    const ref = firestore.collection("product").doc(id);
    await ref.update(record);
};

export const createProducts = async (record) => {
    const col = firestore.collection("product");
    await col.add(record);
};
