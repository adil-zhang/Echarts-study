var loc = new Locator([], OBJECT, DETAIL);
图片1.setCss(loc, '.mymove{animation:2s linear 1s infinite alternate mymove}@keyframes mymove{from{transform:translateY(0)}to{transform:translateY(20px)}}');
图片1.setClassName(loc, 'mymove');