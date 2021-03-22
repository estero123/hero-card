import React, { useEffect, useState } from 'react';

const useCRUD = (service) => {
  const [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchList = React.useCallback(async () => {
    const response = await service.getList();
    if (response && response.status === 200) {
      setList(response.data);
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [service]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const addItem = React.useCallback(async item => {
    setIsLoaded(false);
    const response = await service.add(item);
    if (response && response.status === 200) {
      fetchList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchList, service]);

  const deleteItem = React.useCallback(async id => {
    setIsLoaded(false);
    const response = await service.remove(id);
    if (response && response.status === 200) {
      fetchList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchList, service]);

  const updateItem = React.useCallback(async item => {
    setIsLoaded(false);
    const response = await service.update(item);
    if (response && response.status === 200) {
      fetchList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchList, service]);


  return { list, isLoaded, addItem, updateItem, deleteItem, fetchList }
};

export default useCRUD;
