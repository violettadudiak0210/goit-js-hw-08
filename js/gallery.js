const images = [
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
  ];
  
  // Знаходимо контейнер галереї
  const galleryContainer = document.querySelector('.gallery');
  
  // Створюємо розмітку
  const galleryMarkup = images
    .map(
      ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `
    )
    .join('');
  
  galleryContainer.innerHTML = galleryMarkup;
  
  // Додаємо делегування подій
  galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
    
    const { target } = event;
  
    if (target.nodeName !== 'IMG') return;
  
    const largeImageURL = target.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="800" height="600">
    `);
  
    instance.show();
  
    // Додаємо закриття модалки по клавіші Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        instance.close();
      }
    });
  });
  