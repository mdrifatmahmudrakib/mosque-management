import React from 'react';
import { useForm } from 'react-hook-form';

const useImage = (data) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const [user] = useAuthState(auth);
    const imageStorageKey = '66d703a3620cbf4048028b3360c26490';


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    // const imam = {
                    //     name: data.name,
                    //     email: data.email,
                    //     img: img
                    // }


                }

            })
    }
    return [img]
};

export default useImage;