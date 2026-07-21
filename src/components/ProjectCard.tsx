import Card from '@jbpark/ui-kit/Card';
import Space from '@jbpark/ui-kit/Space';
import Tag from '@jbpark/ui-kit/Tag';
import Typography from '@jbpark/ui-kit/Typography';

import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Typography.Title level={6}>{project.name}</Typography.Title>
          <Typography.Text className="mt-1 text-sm text-muted-foreground">
            {project.tagline}
          </Typography.Text>
        </div>
        {project.npmUrl && project.npmPackage && (
          <img
            src={`https://img.shields.io/npm/v/${project.npmPackage}?style=flat-square&color=white&labelColor=262626`}
            alt={`npm version for ${project.npmPackage}`}
            className="mt-1 h-5"
            loading="lazy"
          />
        )}
      </div>

      <Typography.Paragraph className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </Typography.Paragraph>

      <Space wrap size="small" className="mt-4">
        {project.stack.map(tech => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </Space>

      <Space size={16} className="mt-6 text-sm">
        <Typography.Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
        >
          GitHub →
        </Typography.Link>
        {project.npmUrl && (
          <Typography.Link
            href={project.npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            npm →
          </Typography.Link>
        )}
        {project.demoUrl && (
          <Typography.Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            Demo →
          </Typography.Link>
        )}
      </Space>
    </Card>
  );
};

export default ProjectCard;
