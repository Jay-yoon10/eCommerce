import firestore from "./../firebase";

export const getFBProducts = async () => {
    // Firestore.collection
    // - https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#collection
    // returns CollectionReference:
    // - https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference
    const col = firestore.collection("product");

    // CollectionReference.get => Promise<QuerySnapshot>
    const queryData = await col.get();

    // QuerySnapshot.docs => Array<QueryDocumentSnapshot>
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
export const updateProducts = async (id, record) => {
    const ref = firestore.collection("product").doc(id);
    await ref.update(record);
};

export const createProducts = async (record) => {
    const col = firestore.collection("product");
    await col.add(record);
};
