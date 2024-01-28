import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function CvList() {
  return (
    <div>
      <div className="sm:mt-6 sm:mx-40 mx-10">
        <dl className="">
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-2xl font-medium leading-6 text-primary">Expériences</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ul className="list-disc">
                <li>
                  <div className='text-primary text-xl text-semibold'>Graphiste</div>
                  <div>Oley Workshop I Aménagement de vans et fourgons sur mesure</div>
                  <div className='mb-4'>Stage avril / mai 2023</div>
                  <div>
                    <ul className='list-disc px-12'>
                      <li>Roll-ups et flyers</li>
                      <li>Création de logos</li>
                      <li>Wordpress</li>
                    </ul>
                  </div>
                </li>
                <li className='mt-5'>
                  <div className='text-primary text-xl text-semibold'>Chargée de communication</div>
                  <div>Rue Bambel I Start-up de mode</div>
                  <div className='mb-4'>Contrat en alternance 2021 / 2023</div>
                  <div>
                    <ul className='list-disc px-12'>
                      <li>Création d’identités visuelles</li>
                      <li>Communication</li>
                      <li>Gestion des réseaux sociaux</li>
                      <li>Maquettes d’applications web</li>
                    </ul>
                  </div>
                </li>
                <li className='mt-5'>
                  <div className='text-primary text-xl text-semibold'>Webdesigner</div>
                  <div>AKAWAM I Agence de développement web</div>
                  <div className='mb-4'>Stage mai / juin 2021</div>
                  <div>
                    <ul className='list-disc px-12'>
                      <li>Création de wireframes</li>
                      <li>Illustrations de newsletters</li>
                      <li>Maquettes de sites internet</li>
                      <li>Wordpress</li>
                      <li>Découverte UI/UX design</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-2xl font-medium leading-6 text-primary">Formation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ul className="list-disc">
                <li>
                  <div className='text-primary text-xl text-semibold'>Mastère Direction Artistique 360°</div>
                  <div>ECV Lille I 2023-2025</div>
                </li>
                <li className='mt-5'>
                  <div className='text-primary text-xl text-semibold'>Bachelor Design graphique</div>
                  <div>Efficom Lille I 2020-2023</div>
                </li>
                <li className='mt-5'>
                  <div className='text-primary text-xl text-semibold'>Baccalauréat scientifique section européenne</div>
                  <div>Lycée Jean Perrin, Lambersart I 2020</div>
                </li>
              </ul>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-2xl font-medium leading-6 text-primary">Outils</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ul className="list-disc">
                <li>Adobe Photoshop</li>
                <li>Adobe Indesign</li>
                <li>Adobe Illustrator</li>
                <li>Adobe After Effects</li>
              </ul>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-2xl font-medium leading-6 text-primary">INTÉRÊTS</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <ul className="list-disc">
                <li>Crochet</li>
                <li>Peinture et linogravure</li>
                <li>Photographie</li>
                <li>Musique</li>
                <li>Cinéma</li>
                <li>Écologie</li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
