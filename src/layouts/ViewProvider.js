import React, { useState, useEffect } from 'react';
import ApiService from '../utils/apiService';
import ProviderCard from '../components/ProviderCard';

const ViewProvider = (props) => {
  // TASK 6:
  // Render Single Provider View Here
  // Feel free to using existing styles,
  // or add new ones if you want to :)
  //
  // For Bonus points, you can also add functionality to edit the provider
  // Reusing the NewProviderForm component for this will make it a whole lot easier :D
  const [provider, setProvider] = useState("")
  useEffect(() => {
    const { id } = this.props.match.params;
    const url = ApiService.ENDPOINTS.providers
    ApiService.get(`${url}/${id}`)
      .then((data) => {
        setProvider(data.data)
      });

  }, [])

  function handleClick(){}

  function displayProvider() {
    let display;
    if (!provider) {
      display = <p>Error getting Provider</p>
    } else {
      display = (
        <ProviderCard
          key={provider.id}
          name={provider.name}
          address={provider.location.address}
          rating={provider.rating}
          providerType={provider.type}
          imageUrl={provider.imageUrl}
          onClick={() => handleClick(provider.id)}
        />
      )
    }

    return display;
  }

  return (

    <h1>View Provider <span><i className="fa fa-edit">{displayProvider()}</i></span></h1>
  )

}

export default ViewProvider;