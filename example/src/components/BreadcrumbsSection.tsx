import { Breadcrumb, Section, Title } from "@fbaldini/pulse-ui";

export function BreadcrumbsSection() {
  return (
    <Section>
      <Title as="h3">Breadcrumbs</Title>
      <Title as="h5" className="my-2">
        Default
      </Title>
      <div className="grid md:grid-cols-2">
        <Breadcrumb>
          <Breadcrumb.Item>
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <svg
              className="rtl:rotate-180 block w-3 h-3 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-sm font-medium hover:text-primary md:ms-2"
            >
              Templates
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <svg
              className="rtl:rotate-180 w-3 h-3 mx-1 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-sm font-medium md:ms-2">PulseUI</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Title as="h5" className="my-2">
        With background
      </Title>
      <div className="grid md:grid-cols-2">
        <Breadcrumb withBackground>
          <Breadcrumb.Item>
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <svg
              className="rtl:rotate-180 block w-3 h-3 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ms-1 text-sm font-medium hover:text-primary md:ms-2"
            >
              Templates
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <svg
              className="rtl:rotate-180 w-3 h-3 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-sm font-medium md:ms-2">PulseUI</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </Section>
  );
}
